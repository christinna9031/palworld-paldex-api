import 'dotenv/config';
import { staticPlugin } from "@elysiajs/static";
import { Elysia } from "elysia";
import { queryIndexPals } from "./schemas";
import { IndexPalsUseCase } from "./useCases";

const app = new Elysia()
  .use(staticPlugin())
  .get(
    "/",
    ({ headers, query: { page, limit, term, ...filter }, response }: { headers: any, query: any, response: any }) => {
      const apiKey = headers['x-api-key'] || "";
      const userAgent = headers['user-agent'] || "";

      // Replace with environment variables
      if (apiKey !== process.env.API_KEY || !userAgent.includes(process.env.REQUIRED_USER_AGENT)) {
        response.status(401).send('Unauthorized');
        return;
      }

      return IndexPalsUseCase.execute({ page, limit, term, filter });
    },
    {
      query: queryIndexPals,
    }
  )
  .listen(process.env.PORT || 3000);

console.log(`🦊 Elysia is running at on port ${app.server?.port}...`);
