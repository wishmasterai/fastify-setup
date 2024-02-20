import * as path from 'path';
import * as dotenv from 'dotenv';
dotenv.config({ path: path.join(process.cwd(), '.env') });

export const Config = {
  PORT: +(process.env.PORT || '')
};
