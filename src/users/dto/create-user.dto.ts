import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto{

    @ApiProperty({example: 'user@email.ru', description: 'Почтовый адрес'})
    @IsString({message: 'Должно быть строкой'})
    @IsEmail({}, {message: 'Некорректный email'})
    readonly declare email: string;

    @ApiProperty({example: '123456789', description: 'Пароль'})
    @IsString({message: 'Должно быть строкой'})
    @Length(4, 16, {message: 'Пароль от 4 до 16 символов'})
    readonly declare password: string;
}