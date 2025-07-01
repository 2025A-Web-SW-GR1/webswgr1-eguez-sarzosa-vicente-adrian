import { Inject, Injectable } from '@nestjs/common';
import { Casa } from './casa.entity';
import { FindManyOptions, Repository } from 'typeorm';

@Injectable()
export class CasaService {
    constructor(
        @Inject('CASA_REPOSITORY')
        private photoRepository: Repository<Casa>,
    ){}
    obtenerTodos(
        options?: FindManyOptions<Casa> | undefined
    ){
        return this.photoRepository.find(options);
    }
}
