/**
## Pick<T, K>

Utilizado quando queremos pegar apenas algumas propriedades (K) 
de uma outra interface (T). Exemplo:
**/

interface Video {
    title: string;
    description: string;
		fps: number;
    duration: number;
}

type Image = Pick<Video, 'title' | 'description'>;

const picture: Image = {
    title: 'Profile',
    description: "Picture taken for my driver's license",
};

/**
## Omit<T, K>

Utilizando quando queremos excluir apenas algumas propriedades (K) 
de uma outra interface (T). Exemplo:

**/

interface Video {
    title: string;
    description: string;
		fps: number;
    duration: number;
}

type Image = Omit<Video, 'fps' | 'duration'>;

const picture: Image = {
    title: 'Profile',
    description: "Picture taken for my driver's license",
};
