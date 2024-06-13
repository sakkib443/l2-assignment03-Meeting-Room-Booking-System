import cors from 'cors';
import express, { Application, Request, Response} from 'express';
import globalErrorHandler from './app/middleware/globalErrorHandler';
import notFoundErrorHandler from './app/middleware/notFoundErrorHandler';
import router from './app/routes';



const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api', router )

const getAController = (req: Request, res: Response) => {
  const a = 10;
  res.send(a);
};
app.get('/', getAController);


app.use(globalErrorHandler);
app.use(notFoundErrorHandler)

export default app;
