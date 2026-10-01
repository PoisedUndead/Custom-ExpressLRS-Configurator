import GitRepository from '../models/GitRepository';

interface IConfig {
  documentationUrl: string;
  githubRepositoryUrl: string;
  facebookGroupUrl: string;
  discordUrl: string;
  openCollectiveUrl: string;
  gettingStartedUrl: string;
  productFinderUrl: string;
  luaScriptsUrl: string;
  expressLRSGit: GitRepository;
  backpackGit: GitRepository;
}

export const Config: IConfig = {
  documentationUrl: 'https://www.expresslrs.org/',
  githubRepositoryUrl: 'https://github.com/PoisedUndead/Custom-ExpressLRS',
  facebookGroupUrl: 'https://www.facebook.com/groups/636441730280366',
  discordUrl: 'https://discord.gg/dS6ReFY',
  openCollectiveUrl: 'https://opencollective.com/expresslrs',
  gettingStartedUrl: 'https://www.expresslrs.org/quick-start/getting-started/',
  productFinderUrl: 'https://www.expresslrs.org/product-finder/',
  luaScriptsUrl: 'https://github.com/ExpressLRS/Lua-Scripts/',
  expressLRSGit: {
    cloneUrl: 'https://github.com/PoisedUndead/Custom-ExpressLRS',
    url: 'https://github.com/PoisedUndead/Custom-ExpressLRS',
    owner: 'PoisedUndead',
    repositoryName: 'Custom-ExpressLRS',
    rawRepoUrl: 'https://raw.githubusercontent.com/PoisedUndead/Custom-ExpressLRS',
    srcFolder: 'src',
    tagExcludes: ['<2.5.0'],
    hardwareArtifactUrl:
      'https://poisedundead.github.io/Custom-ExpressLRS/ExpressLRS/hardware.zip',
  },
  backpackGit: {
    cloneUrl: 'https://github.com/ExpressLRS/Backpack',
    url: 'https://github.com/ExpressLRS/Backpack',
    owner: 'PoisedUndead',
    repositoryName: 'Backpack',
    rawRepoUrl: 'https://raw.githubusercontent.com/ExpressLRS/Backpack',
    srcFolder: '/',
    tagExcludes: [],
    hardwareArtifactUrl: null,
  },
};

export default Config;
