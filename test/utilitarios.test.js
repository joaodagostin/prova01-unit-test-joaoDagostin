const Utilitarios = require('../src/utilitarios');

describe('Testes da classe Utilitarios', () => {
  const utils = new Utilitarios();

  describe('Strings', () => {
    it('deve inverter uma string', () => {
      expect(utils.inverterString('teste')).toBe('etset');
    });

    it('conta caracteres corretamente', () => {
      expect(utils.contarCaracteres('OpenAI')).toBe(6);
    });

    it('converte para maiúsculas', () => {
      expect(utils.paraMaiusculas('abc')).toBe('ABC');
    });

    it('converte para minúsculas', () => {
      expect(utils.paraMinusculas('ABC')).toBe('abc');
    });

    it('coloca a primeira letra em maiúscula', () => {
      expect(utils.primeiraLetraMaiuscula('hello')).toBe('Hello');
    });

    it('remove espaços no início e fim', () => {
      expect(utils.removerEspacos('  texto aqui  ')).toBe('texto aqui');
    });

    it('repete texto corretamente', () => {
      expect(utils.repetirTexto('ha', 3)).toBe('hahaha');
    });

    it('conta palavras em uma string', () => {
      expect(utils.contarPalavras('teste de contagem')).toBe(3);
    });

    it('verifica se é palíndromo', () => {
      expect(utils.ehPalindromo('Ame a ema')).toBe(true);
      expect(utils.ehPalindromo('banana')).toBe(false);
    });
  });

  describe('Números e operações', () => {
    it('soma dois números', () => {
      expect(utils.somar(10, 5)).toBe(15);
    });

    it('subtrai dois números', () => {
      expect(utils.subtrair(10, 4)).toBe(6);
    });

    it('multiplica corretamente', () => {
      expect(utils.multiplicar(3, 4)).toBe(12);
    });

    it('divide corretamente', () => {
      expect(utils.dividir(10, 2)).toBe(5);
    });

    it('lança erro ao dividir por zero', () => {
      expect(() => utils.dividir(5, 0)).toThrow();
    });

    it('verifica se número é par', () => {
      expect(utils.ehPar(4)).toBe(true);
      expect(utils.ehPar(7)).toBe(false);
    });

    it('valida se é um número válido', () => {
      expect(utils.ehNumero(42)).toBe(true);
      expect(utils.ehNumero('42')).toBe(false);
      expect(utils.ehNumero(NaN)).toBe(false);
    });

    it('gera número aleatório dentro do limite', () => {
      const num = utils.gerarNumeroAleatorio(20);
      expect(num).toBeGreaterThanOrEqual(0);
      expect(num).toBeLessThan(20);
    });
  });

  describe('Arrays', () => {
    const exemplo = [3, 1, 2, 1];

    it('retorna o primeiro elemento', () => {
      expect(utils.primeiroElemento(exemplo)).toBe(3);
    });

    it('retorna o último elemento', () => {
      expect(utils.ultimoElemento(exemplo)).toBe(1);
    });

    it('calcula o tamanho do array', () => {
      expect(utils.tamanhoArray(exemplo)).toBe(4);
    });

    it('ordena array', () => {
      expect(utils.ordenarArray(exemplo)).toEqual([1, 1, 2, 3]);
    });

    it('inverte array', () => {
      expect(utils.inverterArray([1, 2, 3])).toEqual([3, 2, 1]);
    });

    it('junta array com separador', () => {
      expect(utils.juntarArray(['a', 'b', 'c'], '-')).toBe('a-b-c');
    });

    it('calcula média dos valores', () => {
      expect(utils.mediaArray([2, 4, 6])).toBe(4);
      expect(utils.mediaArray([])).toBe(0);
    });

    it('remove elementos duplicados', () => {
      expect(utils.removerDuplicados(exemplo)).toEqual([3, 1, 2]);
    });
  });

  describe('Objetos', () => {
    it('mescla dois objetos', () => {
      const obj1 = { nome: 'João', idade: 20 };
      const obj2 = { idade: 25, curso: 'SI' };

      const resultado = utils.mesclarObjetos(obj1, obj2);

      expect(resultado).toEqual({
        nome: 'João',
        idade: 25,
        curso: 'SI',
      });
    });
  });
});
