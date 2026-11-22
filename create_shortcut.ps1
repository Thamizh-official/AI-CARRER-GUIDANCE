$WshShell = New-Object -ComObject WScript.Shell
$DesktopPath = [System.Environment]::GetFolderPath("Desktop")
$ShortcutPath = Join-Path -Path $DesktopPath -ChildPath "AURA AI.lnk"
$Shortcut = $WshShell.CreateShortcut($ShortcutPath)
$Shortcut.TargetPath = "C:\Users\tamil\.gemini\antigravity\scratch\ai-career-guidance\run.bat"
$Shortcut.WorkingDirectory = "C:\Users\tamil\.gemini\antigravity\scratch\ai-career-guidance"
$Shortcut.IconLocation = "shell32.dll,24"
$Shortcut.Save()
Write-Host "Desktop shortcut created successfully at: $ShortcutPath"
