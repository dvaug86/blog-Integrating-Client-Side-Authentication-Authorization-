import { Query } from "..";
import { MysqlResponse, UsersTable } from "../models";

//find someone's email in our database
const find = (column: string, value: string) => Query<UsersTable[]>('SELECT * FROM users WHERE ?? = ?', [column, value]);

//register our users
const insert = (newUser:{email: string, password: string}) => Query<MysqlResponse>('INSERT INTO users SET ?', newUser);

export default{
    find,
    insert
}