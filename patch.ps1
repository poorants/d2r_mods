$source = "mods"
$destination = "C:\Users\donghun.kim\Desktop\D2RMM 1.7.3\mods"

Get-ChildItem $source -Directory | ForEach-Object {
    Copy-Item $_.FullName $destination -Recurse -Force
}
