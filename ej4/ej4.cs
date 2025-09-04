using System;

class Program
{
    static void Main()
    {
        int[] arreglo = { 100, 200, 300, 400, 500 };
        char continuar = 'S';

        do
        {
            Console.WriteLine("Ingrese valor a buscar: ");
            int buscar = int.Parse(Console.ReadLine());

            bool encontrado = false;

            for (int i = 0; i < arreglo.Length; i++)
            {
                if (arreglo[i] == buscar)
                {
                    Console.WriteLine($"El valor ingresado se encuentra en la posición: {i}");
                    encontrado = true;
                }
            }

            if (!encontrado)
            {
                Console.WriteLine("El valor ingresado no se encuentra en el arreglo.");
            }

            Console.WriteLine("¿Desea probar con otro valor? (S/N): ");
            continuar = Char.ToUpper(Console.ReadLine()[0]);

        } while (continuar == 'S');
    }
}

