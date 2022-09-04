import { ExampleCodeService } from '@api/example/code/example-code.service';
import { GetCodeRequestDto, GetCodeResponseDto } from '@api/example/code/dto/get-code.dto';
export declare class ExampleCodeController {
    protected readonly exampleCodeService: ExampleCodeService;
    constructor(exampleCodeService: ExampleCodeService);
    getCode(getCodeRequestDto: GetCodeRequestDto): GetCodeResponseDto;
}
