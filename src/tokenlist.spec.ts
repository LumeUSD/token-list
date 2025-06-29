const LUSD_MINT = 'HjHgtmRntsg3wU4aED7PfQ6oFq4XbmMrLjmRAkG5LumE';

test('LUSD token is present in token list', async (t) => {
  const list = await new TokenListProvider().resolve(Strategy.Static);
  const token = list
    .filterByChainId(ENV.MainnetBeta)
    .getList()
    .find((item) => item.address === LUSD_MINT);

  t.truthy(token, 'LUSD token not found in list');
  t.is(token?.symbol, 'LUSD');
  t.is(token?.name, 'LumE USD');
});

test('LUSD token has correct decimals and tag', async (t) => {
  const list = await new TokenListProvider().resolve(Strategy.Static);
  const token = list
    .filterByChainId(ENV.MainnetBeta)
    .getList()
    .find((item) => item.address === LUSD_MINT);

  t.truthy(token);
  t.is(token?.decimals, 8);
  t.true(token?.tags?.includes('stablecoin'));
});

test('LUSD token is not duplicated', async (t) => {
  const list = await new TokenListProvider().resolve(Strategy.Static);
  const matches = list
    .filterByChainId(ENV.MainnetBeta)
    .getList()
    .filter((item) => item.address === LUSD_MINT);

  t.is(matches.length, 1);
});