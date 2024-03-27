import { PartialType } from '@nestjs/mapped-types';
import { CreateLogConcertDto } from './create-log_concert.dto';

export class UpdateLogConcertDto extends PartialType(CreateLogConcertDto) {}
