import { CategoriesService } from '@api/categories/categories.service';
import { GetCategoriesRequestQuery, GetCategoriesResponseDto } from '@api/categories/dto/get-categories.dto';
import { GetUserCategoriesRequestQueryDto, GetUserCategoriesResponseDto } from '@api/categories/dto/get-user-categories.dto';
export declare class CategoriesController {
    private readonly categoriesService;
    constructor(categoriesService: CategoriesService);
    getCategories({ categoryName }: GetCategoriesRequestQuery): Promise<GetCategoriesResponseDto>;
    getUsersCategories({ userId }: GetUserCategoriesRequestQueryDto): Promise<GetUserCategoriesResponseDto>;
}
