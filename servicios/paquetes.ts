import { PackageDetail } from "@/models/package";
import { Nose } from "../models/destinos"; 

const BASE_URL = "https://tourism-api-main-9pnqbv.laravel.cloud/api/v1";

export const fetchPackages = async (): Promise<Nose[]> => {
    try {
        const response = await fetch(`${BASE_URL}/packages`);
        if (!response.ok) {
            throw new Error("Error al obtener los paquetes");
        }
        const data = await response.json();
        return data.results; // Accedemos a results que es el arreglo de paquetes
    } catch (error) {
        console.error("Error en el servicio:", error);
        throw error;
    }
};



// Servicio para obtener el detalle de un paquete por ID
export const fetchPackageDetail = async (id: number): Promise<PackageDetail> => {
    try {
        const response = await fetch(`${BASE_URL}/packages/${id}`);
        if (!response.ok) {
            throw new Error("Error al obtener el detalle del paquete");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error en el servicio de detalle:", error);
        throw error;
    }
};