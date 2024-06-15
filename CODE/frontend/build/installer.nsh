!include "MUI2.nsh"

!macro customInstall
  SetOutPath "$INSTDIR"
  nsExec::ExecToLog 'cmd.exe /c "npm install"'
  nsExec::ExecToLog 'cmd.exe /c "node check-mysql.js"'
!macroend
