// Perguntas e respostas do quiz
const questions = [
    {
        "question": "Qual é o livro que começa com 'No princípio criou Deus os céus e a terra'?",
        "options": ["Gênesis", "Êxodo", "Levítico", "Números"],
        "answer": "Gênesis",
        "hints": [
            "É o primeiro livro da Bíblia.",
            "Relata a criação do mundo.",
            "Contém a história de Adão e Eva.",
            "Tem um nome que significa 'origem' ou 'começo'."
        ]
    },
    {
        "question": "Qual livro da Bíblia é conhecido por conter os Dez Mandamentos?",
        "options": ["Levítico", "Êxodo", "Josué", "Juízes"],
        "answer": "Êxodo",
        "hints": [
            "Este livro é o segundo da Bíblia.",
            "Trata da saída dos israelitas do Egito.",
            "É onde Moisés recebe as tábuas de pedra.",
            "Seu nome está associado à saída do Egito."
        ]
    },
    {
        "question": "Qual livro da Bíblia contém a história de um gigante derrotado por uma pedra?",
        "options": ["1 Samuel", "2 Reis", "1 Crônicas", "2 Crônicas"],
        "answer": "1 Samuel",
        "hints": [
            "É um dos livros históricos.",
            "Foca na vida do rei Davi.",
            "O evento central é a batalha de Davi e Golias.",
            "O nome do livro é o mesmo de um rei famoso."
        ]
    },
    {
        "question": "Qual livro é conhecido por seus conselhos práticos e sabedoria?",
        "options": ["Provérbios", "Eclesiastes", "Cantares", "Salmos"],
        "answer": "Provérbios",
        "hints": [
            "Contém ditos e frases de sabedoria.",
            "Escrito por Salomão.",
            "Ajuda a lidar com questões do dia a dia.",
            "O nome do livro é sinônimo de 'máximas'."
        ]
    },
    {
        "question": "Qual livro da Bíblia é um relato da queda de Jericó?",
        "options": ["Juízes", "Josué", "Reis", "Samuel"],
        "answer": "Josué",
        "hints": [
            "Narrou a conquista da Terra Prometida.",
            "O líder de Israel neste livro é Josué.",
            "Descreve a travessia do rio Jordão.",
            "O nome do livro é o mesmo de um líder militar."
        ]
    },
    {
        "question": "Qual livro contém uma série de poesias e orações?",
        "options": ["Isaías", "Jeremias", "Lamentações", "Ezequiel"],
        "answer": "Lamentações",
        "hints": [
            "Escrito por Jeremias.",
            "Reflete sobre a destruição de Jerusalém.",
            "Contém expressões de tristeza e lamento.",
            "O nome do livro está relacionado com o ato de chorar."
        ]
    },
    {
        "question": "Qual livro da Bíblia é um livro profético e inclui visões de um cavalo branco?",
        "options": ["Daniel", "Ezequiel", "Apocalipse", "Isaías"],
        "answer": "Apocalipse",
        "hints": [
            "É o último livro do Novo Testamento.",
            "Fala sobre o fim dos tempos e a vitória final de Cristo.",
            "Inclui visões apocalípticas e simbólicas.",
            "O nome do livro está relacionado com 'revelação'."
        ]
    },
    {
        "question": "Qual livro da Bíblia narra a história de uma jovem que se torna rainha da Pérsia?",
        "options": ["Ester", "Rute", "Débora", "Ana"],
        "answer": "Ester",
        "hints": [
            "A protagonista é uma judia que se torna esposa do rei Xerxes.",
            "Este livro fala sobre a salvação dos judeus.",
            "O nome do livro é o mesmo da protagonista.",
            "A história ocorre durante o exílio babilônico."
        ]
    },
    {
        "question": "Qual livro é uma coleção de cânticos e louvores a Deus?",
        "options": ["Salmos", "Cantares", "Provérbios", "Eclesiastes"],
        "answer": "Salmos",
        "hints": [
            "Contém 150 capítulos.",
            "É conhecido por seus versos poéticos.",
            "Muitas vezes é atribuído ao rei Davi.",
            "O nome do livro está relacionado a 'canções'."
        ]
    },
    {
        "question": "Qual livro descreve a destruição de Babilônia e o chamado à justiça?",
        "options": ["Isaías", "Jeremias", "Lamentações", "Ezequiel"],
        "answer": "Isaías",
        "hints": [
            "Escrito por um profeta que sofreu durante a queda de Jerusalém.",
            "Fala sobre o cativeiro babilônico e a necessidade de arrependimento.",
            "Contém lamentos e advertências.",
            "O nome do livro é o mesmo do profeta."
        ]
    },
    {
        "question": "Qual livro do Novo Testamento é uma carta do apóstolo Paulo aos cristãos de Roma?",
        "options": ["Romanos", "Coríntios", "Gálatas", "Efésios"],
        "answer": "Romanos",
        "hints": [
            "É um dos livros do Novo Testamento.",
            "Aborda questões teológicas e práticas sobre a salvação.",
            "Destina-se à Igreja em Roma.",
            "O nome do livro é o mesmo da cidade à qual a carta é endereçada."
        ]
    },
    {
        "question": "Qual livro contém as instruções para a construção do tabernáculo?",
        "options": ["Êxodo", "Levítico", "Números", "Deuteronômio"],
        "answer": "Êxodo",
        "hints": [
            "Este livro segue o Gênesis e narra a saída do Egito.",
            "Detalha as leis e rituais do povo de Israel.",
            "Descreve a construção de um local de culto portátil.",
            "O nome do livro está associado ao conceito de 'saída' ou 'libertação'."
        ]
    },
    {
        "question": "Qual livro relata a história de um homem que foi engolido por um grande peixe?",
        "options": ["Jonas", "Daniel", "Elias", "Samuel"],
        "answer": "Jonas",
        "hints": [
            "É um dos livros menores dos profetas.",
            "A história envolve uma grande tempestade e um peixe.",
            "O profeta é enviado para pregar em Nínive.",
            "O nome do livro é o mesmo do profeta."
        ]
    },
    {
        "question": "Qual livro tem como tema central a fé e a justiça?",
        "options": ["Hebreus", "Tiago", "Pedro", "João"],
        "answer": "Tiago",
        "hints": [
            "É uma carta do Novo Testamento.",
            "Discute a relação entre fé e obras.",
            "Enfatiza a prática da justiça e do comportamento ético.",
            "O nome do livro é o mesmo de um apóstolo."
        ]
    },
    {
        "question": "Qual livro descreve a origem e a história dos patriarcas israelitas?",
        "options": ["Gênesis", "Levítico", "Deuteronômio", "Josué"],
        "answer": "Gênesis",
        "hints": [
            "É o primeiro livro da Bíblia.",
            "Foca na criação, Adão, Noé, Abraão, Isaac e Jacó.",
            "O nome do livro é sinônimo de 'origem'.",
            "Relata a formação do povo de Israel."
        ]
    },
    {
        "question": "Qual livro é um conjunto de poemas que celebram o amor entre um homem e uma mulher?",
        "options": ["Cantares", "Provérbios", "Eclesiastes", "Salmos"],
        "answer": "Cantares",
        "hints": [
            "Também conhecido como 'Cântico dos Cânticos'.",
            "Atribuído ao rei Salomão.",
            "Celebra o amor e o desejo romântico.",
            "O nome do livro é associado a 'canções' ou 'hinos'."
        ]
    },
    {
        "question": "Qual Evangelho é conhecido por seu detalhamento das genealogias de Jesus?",
        "options": ["Mateus", "Marcos", "Lucas", "João"],
        "answer": "Mateus",
        "hints": [
            "É o primeiro Evangelho do Novo Testamento.",
            "Foca na linhagem e genealogia de Jesus.",
            "Inclui o Sermão da Montanha.",
            "O nome do livro é o mesmo do apóstolo e evangelista."
        ]
    },
    {
        "question": "Qual livro é uma reflexão filosófica sobre a futilidade da vida e a busca por significado?",
        "options": ["Eclesiastes", "Cantares", "Provérbios", "Salmos"],
        "answer": "Eclesiastes",
        "hints": [
            "Explora o sentido da vida e o valor das coisas terrenas.",
            "Escrito por Salomão.",
            "Fala sobre a futilidade das realizações humanas.",
            "O nome do livro significa 'pregador' ou 'advogado'."
        ]
    },
    {
        "question": "Qual livro conta a história de uma mulher moabita que se tornou parte da linhagem de Davi?",
        "options": ["Rute", "Ester", "Juízes", "1 Samuel"],
        "answer": "Rute",
        "hints": [
            "A história se passa durante o período dos Juízes.",
            "Rute é uma ancestral de Davi e de Jesus.",
            "O livro mostra a lealdade e a fé de Rute.",
            "O nome do livro é o mesmo da protagonista."
        ]
    },
    {
        "question": "Qual livro da Bíblia fala sobre a conquista da Terra Prometida e a divisão entre as tribos de Israel?",
        "options": ["Josué", "Juízes", "1 Reis", "2 Samuel"],
        "answer": "Josué",
        "hints": [
            "Descreve a tomada de Jericó e outras cidades.",
            "Focado na divisão da Terra Prometida entre as tribos.",
            "O nome do livro é o mesmo do líder militar.",
            "O livro segue a liderança de Moisés."
        ]
    },
    {
        "question": "Qual livro é uma carta escrita para encorajar a fé e a perseverança dos cristãos em meio a perseguições?",
        "options": ["Hebreus", "Tiago", "Pedro", "João"],
        "answer": "Hebreus",
        "hints": [
            "Aborda a superioridade de Cristo sobre a lei mosaica.",
            "Destina-se a cristãos enfrentando perseguições.",
            "Explora temas de fé e perseverança.",
            "O livro não tem um autor claramente identificado."
        ]
    },
    {
        "question": "Qual livro narra a ascensão e a queda do reino de Salomão e a divisão subsequente do reino?",
        "options": ["1 Reis", "2 Reis", "1 Crônicas", "2 Crônicas"],
        "answer": "1 Reis",
        "hints": [
            "Descreve o reinado de Salomão e a divisão do reino.",
            "Seguido pelo livro de 2 Reis.",
            "Foco na história dos reis de Israel e Judá.",
            "O livro começa com a morte de Davi."
        ]
    },
    {
        "question": "Qual livro contém a lei dada a Moisés no Monte Sinai e os eventos da travessia do deserto?",
        "options": ["Êxodo", "Levítico", "Números", "Deuteronômio"],
        "answer": "Êxodo",
        "hints": [
            "Relata a saída do Egito e a recepção das leis.",
            "Inclui o evento da travessia do deserto.",
            "Descreve a construção do tabernáculo.",
            "Segue o livro de Gênesis."
        ]
    },
    {
        "question": "Qual livro da Bíblia contém visões sobre o fim dos tempos, incluindo a visão de uma estátua de vários metais?",
        "options": ["Daniel", "Ezequiel", "Isaías", "Jeremias"],
        "answer": "Daniel",
        "hints": [
            "Fala sobre o futuro e o fim dos tempos.",
            "Inclui a visão da estátua de diversos metais.",
            "O livro é conhecido por suas visões proféticas.",
            "O profeta Daniel está em Babilônia."
        ]
    },
    {
        "question": "Qual livro do Novo Testamento narra a expansão da Igreja Cristã e os feitos dos apóstolos?",
        "options": ["Atos", "Romanos", "Efésios", "Filipenses"],
        "answer": "Atos",
        "hints": [
            "Segue os Evangelhos no Novo Testamento.",
            "Descreve as ações dos apóstolos após a ascensão de Jesus.",
            "Foca em Pedro e Paulo.",
            "O livro é conhecido por suas narrativas missionárias."
        ]
    }
]
;

// Embaralhar um array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Embaralhar perguntas
shuffle(questions);

let currentQuestionIndex = 0;
let score = 0;
let hintIndex = 0; // Índice para controlar qual dica será exibida
let totalHintsUsed = 0; // Contador para dicas usadas ao longo do quiz
const maxQuestions = 10; // Número máximo de perguntas a serem respondidas
const maxHints = 5; // Número máximo de dicas

// Função para atualizar a barra de progresso
function updateProgress() {
    const progressBar = document.getElementById('progress-bar');
    const progressPercentage = document.getElementById('progress-percentage');
    const percentage = ((currentQuestionIndex + 1) / maxQuestions) * 100;
    
    progressBar.style.width = `${percentage}%`;
    progressPercentage.textContent = `${Math.round(percentage)}%`;
}

// Função para exibir a pergunta atual e as opções
function displayQuestion() {
    const question = questions[currentQuestionIndex];
    const questionContainer = document.getElementById('question-container');
    const optionsContainer = document.getElementById('options-container');
    const hintContainer = document.getElementById('hint-container');
    
    questionContainer.innerHTML = `<h2>${question.question}</h2>`;
    optionsContainer.innerHTML = '';

    // Criar e adicionar as opções de resposta
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.dataset.value = option;
        optionElement.innerHTML = `<strong>${String.fromCharCode(65 + index)}:</strong> ${option}`;
        optionElement.addEventListener('click', selectOption);

        optionsContainer.appendChild(optionElement);
    });

    // Adicionar dicas
    hintContainer.innerHTML = ''; // Limpar dicas anteriores
    if (totalHintsUsed < maxHints) {
        document.getElementById('hint-button').style.display = 'block';
    } else {
        document.getElementById('hint-button').style.display = 'none';
        hintContainer.innerHTML = `<p>Acabou o limite das dicas!</p>`;
    }
    
    // Atualizar a barra de progresso
    updateProgress();
}

// Função para selecionar uma opção
function selectOption(event) {
    const selectedOption = event.target;
    const options = document.querySelectorAll('.option');

    options.forEach(option => {
        option.classList.remove('selected');
    });

    selectedOption.classList.add('selected');
    document.getElementById('submit-button').disabled = false; // Habilitar o botão de enviar
}

// Função para verificar a resposta
function checkAnswer() {
    const selectedOption = document.querySelector('.option.selected');

    if (!selectedOption) {
        alert('Por favor, selecione uma resposta.');
        return;
    }

    const answer = selectedOption.dataset.value;
    const question = questions[currentQuestionIndex];
    const resultContainer = document.getElementById('result-container');

    // Remover classes anteriores
    resultContainer.classList.remove('correct', 'incorrect');
    
    if (answer === question.answer) {
        score++;
        resultContainer.textContent = "✔ Correto!";
        resultContainer.classList.add('correct'); // Adiciona a classe correta
    } else {
        resultContainer.textContent = `❌ Incorreto! A resposta correta era ${question.answer}.`;
        resultContainer.classList.add('incorrect'); // Adiciona a classe correta
    }

    document.getElementById('submit-button').style.display = 'none';
    document.getElementById('next-button').style.display = 'block';
}

// Função para carregar a próxima pergunta
function loadNextQuestion() {
    currentQuestionIndex++;
    hintIndex = 0; // Resetar o índice de dicas
    if (currentQuestionIndex < maxQuestions) {
        displayQuestion();
        document.getElementById('result-container').textContent = '';
        document.getElementById('next-button').style.display = 'none';
        document.getElementById('submit-button').style.display = 'block';
    } else {
        displayResult();
    }
}

// Função para exibir uma dica
function showHint() {
    if (totalHintsUsed < maxHints) {
        if (hintIndex < questions[currentQuestionIndex].hints.length) {
            const hintContainer = document.getElementById('hint-container');
            const hint = questions[currentQuestionIndex].hints[hintIndex];
            hintContainer.innerHTML = `<p><strong>Dica ${hintIndex + 1}:</strong> ${hint}</p>`;
            hintIndex++;
            totalHintsUsed++;
        } else {
            alert('Não há mais dicas disponíveis para esta pergunta.');
        }
    } else {
        alert('Acabou o limite das dicas!');
        document.getElementById('hint-button').style.display = 'none';
    }
}

// Função para exibir o resultado final
function displayResult() {
    const resultContainer = document.getElementById('result-container');
    const percentage = (score / maxQuestions) * 100;
    let description = '';
    
    if (percentage === 100) {
        description = 'Parabéns você domina a Bíblia!';
    } else if (percentage >= 80) {
        description = 'Muito bom! Está melhor que muitos.';
    } else if (percentage >= 60) {
        description = 'Está começando a ficar bom.';
    } else if (percentage >= 40) {
        description = 'Está começando a ler.';
    } else if (percentage >= 20) {
        description = 'Precisa começar a ler a Bíblia.';
    } else {
        description = 'Parece que você precisa começar a ler a Bíblia.';
    }

    resultContainer.innerHTML = `
        <h2>Você acertou ${score} de ${maxQuestions} perguntas!</h2>
        <p>Sua pontuação é: ${Math.round((score / maxQuestions) * 10)}</p>
        <p>${description}</p>
    `;
    
    document.getElementById('question-container').style.display = 'none';
    document.getElementById('options-container').style.display = 'none';
    document.getElementById('hint-container').style.display = 'none';
    document.getElementById('next-button').style.display = 'none'; // Ocultar botão de próxima pergunta
    document.getElementById('submit-button').style.display = 'none';
    document.getElementById('hint-button').style.display = 'none';
    document.getElementById('restart-button').style.display = 'block'; // Mostrar botão de reiniciar
}

// Função para reiniciar o quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    hintIndex = 0;
    totalHintsUsed = 0;

    // Embaralhar perguntas novamente e exibir a primeira pergunta
    shuffle(questions);
    displayQuestion();

    document.getElementById('result-container').innerHTML = '';
    document.getElementById('question-container').style.display = 'block';
    document.getElementById('options-container').style.display = 'block';
    document.getElementById('hint-container').style.display = 'block';
    document.getElementById('next-button').style.display = 'none'; // Ocultar botão de próxima pergunta
    document.getElementById('submit-button').style.display = 'block';
    document.getElementById('restart-button').style.display = 'none'; // Ocultar botão de reiniciar
}

// Inicializar o quiz
document.getElementById('submit-button').addEventListener('click', checkAnswer);
document.getElementById('next-button').addEventListener('click', loadNextQuestion);
document.getElementById('hint-button').addEventListener('click', showHint);
document.getElementById('restart-button').addEventListener('click', restartQuiz);

// Mostrar a primeira pergunta
displayQuestion();
document.getElementById('next-button').style.display = 'none';
document.getElementById('submit-button').style.display = 'block';

// JavaScript para alternar entre temas
document.getElementById('theme-toggle').addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
});
