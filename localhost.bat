@echo off
pushd http_localhost

where python > NUL 2>&1
if errorlevel 1 goto node

python -m SimpleHTTPServer 23117
if errorlevel 1 goto node
goto end

:node
where node > NUL 2>&1 && where npm > NUL 2>&1
if errorlevel 1 echo Neither node.js nor python found && goto end
call npm install
call npm start

:end
popd
