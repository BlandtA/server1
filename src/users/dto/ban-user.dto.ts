import { IsNumber } from "class-validator";

export class BanUserDto{
    @IsNumber({}, {message: 'Должно быть числом'})
    readonly declare userId: number;
    readonly declare banReason: string;
}