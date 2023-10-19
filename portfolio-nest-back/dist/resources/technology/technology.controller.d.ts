import { TechnologyService } from './technology.service';
export declare class TechnologyController {
    technologyService: TechnologyService;
    findAll(): Promise<{
        technology_id: number;
        technology_name: string;
    }[]>;
}
