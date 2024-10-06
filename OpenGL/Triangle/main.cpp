#include <GL/glut.h>

void init() {
    glClearColor(0.18, 0.12, 0.28, 1.0); // Set background color
    glMatrixMode(GL_PROJECTION);
    glLoadIdentity();
    glOrtho(-1.0, 1.0, -1.0, 1.0, -1.0, 1.0); // Defines range that will be visible on the screen
}

void display() {

    glClear(GL_COLOR_BUFFER_BIT); // Loads the background color

    //Defines the triangle
    glBegin(GL_TRIANGLES);
        glColor3f(1.0, 0.0, 0.0); // Red
        glVertex2f(0.0, 0.87);
        glColor3f(0.0, 1.0, 0.0); // Green
        glVertex2f(-0.5, 0.0);
        glColor3f(0.0, 0.0, 1.0); // Blue
        glVertex2f(0.5, 0.0);
    glEnd(); //ends definition of the triangle

    glFlush(); //forces to render the triangle
}

int main(int argc, char** argv) {

    //Setting up OpenGL environment
    glutInit(&argc, argv);
    glutInitDisplayMode(GLUT_SINGLE | GLUT_RGB);
    glutInitWindowSize(500, 500);
    glutCreateWindow("OpenGL  Triangle");

    init();

    //defines display as the callback function to draw the window
    glutDisplayFunc(display);
    glutMainLoop();
    return 0;
}
