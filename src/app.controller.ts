import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

interface AppConfigResponse {
  appName: string;
  libraryName: string;
  version: string;
  port: string;
}

@ApiTags('Books')
@Controller('config')
export class AppController {
  constructor(private readonly configService: ConfigService) {}

  @Get()
  @ApiOperation({ summary: 'Get application configuration' })
  @ApiResponse({ status: 200, description: 'Configuration returned successfully.' })
  getConfig(): AppConfigResponse {
    return {
      appName: this.configService.get<string>('APP_NAME', ''),
      libraryName: this.configService.get<string>('LIBRARY_NAME', ''),
      version: this.configService.get<string>('API_VERSION', ''),
      port: this.configService.get<string>('PORT', ''),
    };
  }
}
