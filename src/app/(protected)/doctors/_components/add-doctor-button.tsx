"use client"

import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";

import { UpsertDoctorForm } from "./upsert-doctor-form";

export function AddDoctorButton() {
    // const [isOpen, setIsOpen] = useState(false);

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>
                    <Plus />
                    Adicionar médico
                </Button>
            </DialogTrigger>
            <UpsertDoctorForm />
        </Dialog>
    )
}