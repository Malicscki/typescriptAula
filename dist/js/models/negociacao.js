export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
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
