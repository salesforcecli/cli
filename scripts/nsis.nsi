; StrContains - taken from https://nsis.sourceforge.io/StrContains
; This function does a case sensitive searches for an occurrence of a substring in a string.
; It returns the substring if it is found.
; Otherwise it returns null("").
; Written by kenglish_hi
; Adapted from StrReplace written by dandaman32

Var STR_HAYSTACK
Var STR_NEEDLE
Var STR_CONTAINS_VAR_1
Var STR_CONTAINS_VAR_2
Var STR_CONTAINS_VAR_3
Var STR_CONTAINS_VAR_4
Var STR_RETURN_VAR

Function StrContains
  Exch $STR_NEEDLE
  Exch 1
  Exch $STR_HAYSTACK
  ; Uncomment to debug
  ;MessageBox MB_OK 'STR_NEEDLE = $STR_NEEDLE STR_HAYSTACK = $STR_HAYSTACK '
    StrCpy $STR_RETURN_VAR ""
    StrCpy $STR_CONTAINS_VAR_1 -1
    StrLen $STR_CONTAINS_VAR_2 $STR_NEEDLE
    StrLen $STR_CONTAINS_VAR_4 $STR_HAYSTACK
    loop:
      IntOp $STR_CONTAINS_VAR_1 $STR_CONTAINS_VAR_1 + 1
      StrCpy $STR_CONTAINS_VAR_3 $STR_HAYSTACK $STR_CONTAINS_VAR_2 $STR_CONTAINS_VAR_1
      StrCmp $STR_CONTAINS_VAR_3 $STR_NEEDLE found
      StrCmp $STR_CONTAINS_VAR_1 $STR_CONTAINS_VAR_4 done
      Goto loop
    found:
      StrCpy $STR_RETURN_VAR $STR_NEEDLE
      Goto done
    done:
   Pop $STR_NEEDLE ;Prevent "invalid opcode" errors and keep the
   Exch $STR_RETURN_VAR
FunctionEnd

!macro _StrContainsConstructor OUT NEEDLE HAYSTACK
  Push `${HAYSTACK}`
  Push `${NEEDLE}`
  Call StrContains
  Pop `${OUT}`
!macroend

!define StrContains '!insertmacro "_StrContainsConstructor"'

Function .onInit

  ; Securely locate global cmd.exe (System32 or Sysnative)
  StrCpy $R9 "$WINDIR\System32\cmd.exe"
  IfFileExists "$R9" 0 check_sysnative
    Goto cmd_found
  check_sysnative:
  StrCpy $R9 "$WINDIR\Sysnative\cmd.exe"
  IfFileExists "$R9" 0 cmd_not_found
    Goto cmd_found
  cmd_not_found:
  MessageBox MB_OK|MB_ICONSTOP "Error: Could not find global cmd.exe. Installation cannot continue."
  Quit
  cmd_found:

  nsExec::ExecToStack /TIMEOUT=2000 '"$R9" /c "sfdx --version"'
  ; exit code is stored on $0 first, then stdout
  Pop $0
  Pop $0
  ; $0 now contains stdout

  ;$1 is the result of the comparison
  ${StrContains} $1 "sfdx-cli/7." $0
  StrCmp $1 "" notFound1
    MessageBox MB_OK 'Error: sfdx cli installed, please uninstall - https://developer.salesforce.com/docs/atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_uninstall.htm'
    Quit
  notFound1:

FunctionEnd
