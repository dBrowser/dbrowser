!macro customInstall
  WriteRegStr SHCTX "SOFTWARE\RegisteredApplications" "DBrowser" "Software\Clients\StartMenuInternet\DBrowser\Capabilities"

  WriteRegStr SHCTX "SOFTWARE\Classes\DBrowser" "" "DBrowser HTML Document"
  WriteRegStr SHCTX "SOFTWARE\Classes\DBrowser\Application" "AppUserModelId" "DBrowser"
  WriteRegStr SHCTX "SOFTWARE\Classes\DBrowser\Application" "ApplicationIcon" "$INSTDIR\DBrowser.exe,0"
  WriteRegStr SHCTX "SOFTWARE\Classes\DBrowser\Application" "ApplicationName" "DBrowser"
  WriteRegStr SHCTX "SOFTWARE\Classes\DBrowser\Application" "ApplicationCompany" "DBrowser"      
  WriteRegStr SHCTX "SOFTWARE\Classes\DBrowser\Application" "ApplicationDescription" "A privacy-focused, extensible and beautiful web browser"      
  WriteRegStr SHCTX "SOFTWARE\Classes\DBrowser\DefaultIcon" "DefaultIcon" "$INSTDIR\DBrowser.exe,0"
  WriteRegStr SHCTX "SOFTWARE\Classes\DBrowser\shell\open\command" "" '"$INSTDIR\DBrowser.exe" "%1"'

  WriteRegStr SHCTX "SOFTWARE\Classes\.htm\OpenWithProgIds" "DBrowser" ""
  WriteRegStr SHCTX "SOFTWARE\Classes\.html\OpenWithProgIds" "DBrowser" ""

  WriteRegStr SHCTX "SOFTWARE\Clients\StartMenuInternet\DBrowser" "" "DBrowser"
  WriteRegStr SHCTX "SOFTWARE\Clients\StartMenuInternet\DBrowser\DefaultIcon" "" "$INSTDIR\DBrowser.exe,0"
  WriteRegStr SHCTX "SOFTWARE\Clients\StartMenuInternet\DBrowser\Capabilities" "ApplicationDescription" "A privacy-focused, extensible and beautiful web browser"
  WriteRegStr SHCTX "SOFTWARE\Clients\StartMenuInternet\DBrowser\Capabilities" "ApplicationName" "DBrowser"
  WriteRegStr SHCTX "SOFTWARE\Clients\StartMenuInternet\DBrowser\Capabilities" "ApplicationIcon" "$INSTDIR\DBrowser.exe,0"
  WriteRegStr SHCTX "SOFTWARE\Clients\StartMenuInternet\DBrowser\Capabilities\FileAssociations" ".htm" "DBrowser"
  WriteRegStr SHCTX "SOFTWARE\Clients\StartMenuInternet\DBrowser\Capabilities\FileAssociations" ".html" "DBrowser"
  WriteRegStr SHCTX "SOFTWARE\Clients\StartMenuInternet\DBrowser\Capabilities\URLAssociations" "http" "DBrowser"
  WriteRegStr SHCTX "SOFTWARE\Clients\StartMenuInternet\DBrowser\Capabilities\URLAssociations" "https" "DBrowser"
  WriteRegStr SHCTX "SOFTWARE\Clients\StartMenuInternet\DBrowser\Capabilities\StartMenu" "StartMenuInternet" "DBrowser"
  
  WriteRegDWORD SHCTX "SOFTWARE\Clients\StartMenuInternet\DBrowser\InstallInfo" "IconsVisible" 1
  
  WriteRegStr SHCTX "SOFTWARE\Clients\StartMenuInternet\DBrowser\shell\open\command" "" "$INSTDIR\DBrowser.exe"
!macroend
!macro customUnInstall
  DeleteRegKey SHCTX "SOFTWARE\Classes\DBrowser"
  DeleteRegKey SHCTX "SOFTWARE\Clients\StartMenuInternet\DBrowser"
  DeleteRegValue SHCTX "SOFTWARE\RegisteredApplications" "DBrowser"
!macroend