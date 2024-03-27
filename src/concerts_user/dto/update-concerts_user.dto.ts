import { PartialType } from '@nestjs/mapped-types';
import { CreateConcertsUserDto } from './create-concerts_user.dto';

export class UpdateConcertsUserDto extends PartialType(CreateConcertsUserDto) {}
