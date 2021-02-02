import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ideaDto } from './idea.dto';
import { IdeaService } from './idea.service';

@Controller('idea')
export class IdeaController {
  constructor(private ideaService: IdeaService) {}
  @Get()
  getAll() {
    return this.ideaService.getAll();
  }
  @Post()
  create(@Body() data: ideaDto) {
    return this.ideaService.create(data);
  }
  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.ideaService.getOne(id);
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() data: Partial<ideaDto>) {
    return this.ideaService.update(id, data);
  }
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.ideaService.destroy(id);
  }
}
