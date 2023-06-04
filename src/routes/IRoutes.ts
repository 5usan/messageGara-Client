import { FC } from "react";

export interface IRoutes {
    path: string,
    element: FC,
    nestedPath: null | IRoutes
}