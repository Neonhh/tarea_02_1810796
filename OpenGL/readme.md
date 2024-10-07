# Implementación en OpenGL

**Nombre:** Néstor Herrera
**Carnet:** 18-10796
**API:** OpenGL
**SO:** Windows 10 64 bits

Dependencias a instalar:
- MinGW (incluye g++ para compilar C++)
- Freeglut (herramientas necesarias para manejar OpenGL)
- Glew (carga extensiones de OpenGL durante la ejecucion)

Para información sobre la instalación de las dependencias ver:
Hasta la parte de la instalacion de Code::Blocks (este IDE solo es necesario
para el desarrollo).

https://medium.com/swlh/setting-opengl-for-windows-d0b45062caf
(Se utiliza la terminal MSYS2)
**Importante: revisar que el entorno del terminal de MSYS2 (texto en rosado al abrir el terminal) sea MSYS. En Windows, se puede presionar la tecla windows y escribir `MSYS2 MSYS` para abrir MSYS2 en el entorno correcto.**

Nota: En la parte donde se ejecuta `pacman -S mingw-w64-x86_64-toolchain`, basta con instalar solo gcc, corriendo `pacman -S mingw-w64-x86_64-gcc` en su lugar.

## Cómo correrlo

**Se necesita utilizar PowerShell o el cmd de Windows**
Si se esta utilizando un terminal de bash, podemos ejecutar el comando `cmd.exe .`
para abrir el cmd en el directorio actual.

Ya en el repo esta el **main.exe**, que es la aplicacion requerida, para correrla podemos simplemente escribir `main.exe`

Ademas en la consola podemos usar el comando 
`g++ main.cpp -o main.exe -lfreeglut -lglew32 -lopengl32` 
Para crear una aplicacion ejecutable correspondiente con el nombre **main.exe** (para un nombre diferente se puede usar el flag -o).
