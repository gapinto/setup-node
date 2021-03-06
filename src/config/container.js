import { createContainer, InjectionMode} from 'awilix';

const container = createContainer({
    injectionMode: InjectionMode.PROXY  
});

// domain::useCases
container.register({
    //createNewRelease: asClass(CreateNewRelease).singleton(),
});

module.exports = container;
