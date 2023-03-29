export class Negociacao {
    constructor(
        public readonly data: Date, 
        public readonly quantidade: number, 
        public readonly valor: number
        ){}

    get volume(): number{
        return this.quantidade * this.valor;
    }
   
}

/* CODIGO ANTIGO ERA ASSIM - FOI ATUALIZADO PARA UM FORMATO MENOS VERBOSO
export class Negociacao {
    private _data: Date;
    private _quantidade: number;
    private _valor: number;

    constructor (data: Date, quantidade: number, valor: number){
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }
        
    get data(): Date{
        return this._data;
    }

    get quantidade(): number{
        return this._quantidade;
    }

    get valor(): number{
        return this._valor;
    }
    
    */