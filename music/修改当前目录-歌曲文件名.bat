@echo off
setlocal enabledelayedexpansion

rem 遍历当前目录及其子目录下的所有文件
for /r %%a in (*) do (
    set "file=%%~nxa"
    set "ext=%%~xa"
    if "!ext!"==".mp3" (
        if not "!file!"=="song.mp3" (
            move "%%a" "song.mp3" >nul 2>&1
        )
    ) else if "!ext!"==".jpg" (
        if not "!file!"=="cover.jpg" (
            move "%%a" "cover.jpg" >nul 2>&1
        )
    ) else if "!ext!"==".lrc" (
        if not "!file!"=="lyric.lrc" (
            move "%%a" "lyric.lrc" >nul 2>&1
        )
    )
)
echo 文件重命名完成。
rem pause