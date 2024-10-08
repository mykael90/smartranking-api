import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './category.schema';

@Controller('api/v1/categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async createCategory(
    @Body() createCategoryDto: CreateCategoryDto,
  ): Promise<Category> {
    return await this.categoriesService.createCategory(createCategoryDto);
  }

  @Get()
  async findCategories(
    @Query() params: string[],
  ): Promise<Category[] | Category> {
    const category = params['category'];
    const idPlayer = params['idPlayer'];

    if (category) {
      return await this.categoriesService.findCategoryByCategory(category);
    }

    if (idPlayer) {
      return await this.categoriesService.findPlayerCategory(idPlayer);
    }

    return await this.categoriesService.findCategories();
  }

  @Put('/:category')
  @UsePipes(ValidationPipe)
  async updateCategory(
    @Body() updateCategoryDto: UpdateCategoryDto,
    @Param('category') category: string,
  ): Promise<void> {
    return this.categoriesService.updateCategory(category, updateCategoryDto);
  }

  @Post('/:category/players/:_idPlayer')
  async assignPlayerToCategory(@Param() params: string[]): Promise<void> {
    await this.categoriesService.assignPlayerToCategory(params);
  }
}
