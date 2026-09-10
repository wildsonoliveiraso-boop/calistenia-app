Set-Location $PSScriptRoot

$browserUrl = "http://127.0.0.1:8000/"

try {
    if (Get-Command py -ErrorAction SilentlyContinue) {
        $pythonCmd = "py"
    } elseif (Get-Command python -ErrorAction SilentlyContinue) {
        $pythonCmd = "python"
    } else {
        throw "Python nao encontrado. Instale o Python e tente novamente."
    }

    Start-Process $browserUrl
    & $pythonCmd -m http.server 8000
}
catch {
    Write-Host "Erro: $_" -ForegroundColor Red
    Write-Host "Pressione qualquer tecla para sair..." -ForegroundColor Yellow
    $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
}
