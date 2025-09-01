const Utilitarios = require('../src/utilitarios');

describe('Testes da classe Utilitarios', () => {
  let utils;

  beforeEach(() => {
    utils = new Utilitarios();
  });

  // === Strings ===
  describe('Funções relacionadas a Strings', () => {
    test('Inverter uma string simples', () => {
      expect(utils.inverterString('abc')).toBe('cba');
    });

    test('Contar caracteres de uma string', () => {
      expect(utils.contarCaracteres('LeandroUgioni')).toBe(13);
    });

    test('Converter string para maiúsculas', () => {
      expect(utils.paraMaiusculas('abc')).toBe('ABC');
    });

    test('Converter string para minúsculas', () => {
      expect(utils.paraMinusculas('ABC')).toBe('abc');
    });

    test('Colocar a primeira letra em maiúscula', () => {
      expect(utils.primeiraLetraMaiuscula('teste')).toBe('Teste');
    });

    test('Retornar string vazia ao aplicar primeiraLetraMaiuscula em string vazia', () => {
      expect(utils.primeiraLetraMaiuscula('')).toBe('');
    });

    test('Remover espaços no início e fim', () => {
      expect(utils.removerEspacos('  teste ')).toBe('teste');
    });

    test('Repetir texto várias vezes', () => {
      expect(utils.repetirTexto('ha', 3)).toBe('hahaha');
    });

    test('Contar palavras corretamente', () => {
      expect(utils.contarPalavras('  Olá mundo   teste ')).toBe(3);
    });

    test('Verificar palíndromo verdadeiro', () => {
      expect(utils.ehPalindromo('Ame a ema')).toBe(true);
    });

    test('Verificar palíndromo falso', () => {
      expect(utils.ehPalindromo('banana')).toBe(false);
    });
  });

  // === Números ===
  describe('Funções numéricas', () => {
    test('Somar dois números', () => {
      expect(utils.somar(2, 3)).toBe(5);
    });

    test('Subtrair dois números', () => {
      expect(utils.subtrair(10, 4)).toBe(6);
    });

    test('Multiplicar dois números', () => {
      expect(utils.multiplicar(3, 4)).toBe(12);
    });

    test('Dividir dois números', () => {
      expect(utils.dividir(10, 2)).toBe(5);
    });

    test('Lançar erro ao dividir por zero', () => {
      expect(() => utils.dividir(5, 0)).toThrow('Divisão por zero');
    });

    test('Verificar se número par retorna true', () => {
      expect(utils.ehPar(8)).toBe(true);
    });

    test('Verificar se número ímpar retorna false', () => {
      expect(utils.ehPar(7)).toBe(false);
    });

    test('Validar número correto com tipo number', () => {
      expect(utils.ehNumero(42)).toBe(true);
    });

    test('Retornar false para string como número', () => {
      expect(utils.ehNumero('42')).toBe(false);
    });

    test('Retornar false para NaN', () => {
      expect(utils.ehNumero(NaN)).toBe(false);
    });

    test('Retornar false para null e undefined', () => {
      expect(utils.ehNumero(null)).toBe(false);
      expect(utils.ehNumero(undefined)).toBe(false);
    });

    test('Gerar número aleatório dentro do limite passado', () => {
      const n = utils.gerarNumeroAleatorio(50);
      expect(n).toBeGreaterThanOrEqual(0);
      expect(n).toBeLessThan(50);
    });

    test('Gerar número aleatório com valor padrão (100)', () => {
      const n = utils.gerarNumeroAleatorio();
      expect(n).toBeGreaterThanOrEqual(0);
      expect(n).toBeLessThan(100);
    });
  });

  // === Arrays ===
  describe('Funções relacionadas a Arrays', () => {
    test('Obter o primeiro elemento de um array', () => {
      expect(utils.primeiroElemento([1, 2, 3])).toBe(1);
    });

    test('Obter o último elemento de um array', () => {
      expect(utils.ultimoElemento([1, 2, 3])).toBe(3);
    });

    test('Retornar o tamanho do array', () => {
      expect(utils.tamanhoArray([1, 2, 3])).toBe(3);
    });

    test('Ordenar um array de números', () => {
      expect(utils.ordenarArray([3, 1, 2])).toEqual([1, 2, 3]);
    });

    test('Inverter a ordem de um array', () => {
      expect(utils.inverterArray([1, 2, 3])).toEqual([3, 2, 1]);
    });

    test('Juntar array com separador customizado', () => {
      expect(utils.juntarArray(['a', 'b', 'c'], '-')).toBe('a-b-c');
    });

    test('Juntar array com separador padrão (vírgula)', () => {
      expect(utils.juntarArray(['a', 'b', 'c'])).toBe('a,b,c');
    });

    test('Calcular a média dos valores do array', () => {
      expect(utils.mediaArray([2, 4, 6])).toBe(4);
    });

    test('Calcular média de array vazio deve retornar 0', () => {
      expect(utils.mediaArray([])).toBe(0);
    });

    test('Remover duplicados do array', () => {
      expect(utils.removerDuplicados([1, 2, 2, 3, 1])).toEqual([1, 2, 3]);
    });
  });

  // === Objetos ===
  describe('Funções relacionadas a Objetos', () => {
    test('Mesclar dois objetos com sobrescrição de chave', () => {
      const obj1 = { a: 1, b: 2 };
      const obj2 = { b: 3, c: 4 };
      expect(utils.mesclarObjetos(obj1, obj2)).toEqual({ a: 1, b: 3, c: 4 });
    });

    test('Mesclar objeto com objeto vazio mantém original', () => {
      const obj1 = { a: 1 };
      const obj2 = {};
      expect(utils.mesclarObjetos(obj1, obj2)).toEqual({ a: 1 });
    });

    test('Mesclar dois objetos vazios retorna objeto vazio', () => {
      expect(utils.mesclarObjetos({}, {})).toEqual({});
    });
  });
});
