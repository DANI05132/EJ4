import java.util.Scanner;

public class ej4 {
    public static void main(String[] args) {
        int[] arreglo = {100, 200, 300, 400, 500};
        Scanner sc = new Scanner(System.in);
        char continuar = 'S';

        do {
            System.out.println("Ingrese valor a buscar: ");
            int buscar = sc.nextInt();

            boolean encontrado = false;

            for (int i = 0; i < arreglo.length; i++) {
                if (arreglo[i] == buscar) {
                    System.out.println("El valor ingresado se encuentra en la posición: " + i);
                    encontrado = true;
                }
            }

            if (!encontrado) {
                System.out.println("El valor ingresado no se encuentra en el arreglo.");
            }

            System.out.println("¿Desea probar con otro valor? (S/N): ");
            continuar = sc.next().toUpperCase().charAt(0);

        } while (continuar == 'S');
    }
}
