arreglo = [100, 200, 300, 400, 500]
continuar = "S"

while continuar == "S":
    buscar = int(input("Ingrese valor a buscar: "))
    encontrado = False

    for i in range(len(arreglo)):
        if arreglo[i] == buscar:
            print(f"El valor ingresado se encuentra en la posición: {i}")
            encontrado = True

    if not encontrado:
        print("El valor ingresado no se encuentra en el arreglo.")

    continuar = input("¿Desea probar con otro valor? (S/N): ").upper()
