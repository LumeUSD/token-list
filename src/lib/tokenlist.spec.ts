import { TokenInfo } from '@solana/spl-token-registry';

describe('LumE USD Token', () => {
  const lumeUsd: TokenInfo = {
    chainId: 101, // 101 = Solana mainnet
    address: 'HjHgtmRntsg3wU4aED7PfQ6oFq4XbmMrLjmRAkG5LumE',
    symbol: 'LUSD',
    name: 'LumE USD',
    decimals: 8,
    logoURI: 'https://gateway.pinata.cloud/ipfs/bafybeifqn76mz2ctuzludo6uv4v5wm76zjc6oinfg7ez2sqpuk5ig6rzaa',
    tags: ['stablecoin'],
    extensions: {
      telegram: 'https://t.me/LumeUSD',
    },
  };

  it('should have a valid address', () => {
    expect(lumeUsd.address).toMatch(/^([1-9A-HJ-NP-Za-km-z]{32,44})$/);
  });

  it('should have correct decimals', () => {
    expect(lumeUsd.decimals).toBe(8);
  });

  it('should have a valid logo URI', () => {
    expect(lumeUsd.logoURI).toContain('https://');
  });

  it('should have correct name and symbol', () => {
    expect(lumeUsd.name).toBe('LumE USD');
    expect(lumeUsd.symbol).toBe('LUSD');
  });

  it('should have at least one tag', () => {
    expect(lumeUsd.tags.length).toBeGreaterThan(0);
  });
});