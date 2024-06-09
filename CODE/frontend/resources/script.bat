@echo off

:: Pobranie bieżącej ścieżki
set CURRENT_PATH=%cd%
echo Obecna ścieżka: %CURRENT_PATH%

:: Ścieżka do pliku .asar - jeden katalog wyżej
cd ..
set "SOURCE_ASAR=%cd%"
echo Ścieżka do pliku .asar: %SOURCE_ASAR%

:: Ścieżka docelowa - trzy katalogi wyżej
cd ..
cd ..
cd ..
set "DESTINATION=%cd%"
echo Ścieżka docelowa: %DESTINATION%

:: Powrót do pierwotnej ścieżki
cd %CURRENT_PATH%

:: Uruchomienie komendy npx @electron/asar
npx @electron/asar extract "%SOURCE_ASAR%" "%DESTINATION%"

:: Sprawdzenie, czy komenda zakończyła się sukcesem
if %errorlevel% equ 0 (
    echo Plik został pomyślnie wyodrębniony do %DESTINATION%
) else (
    echo Wystąpił błąd podczas wyodrębniania pliku
)
