import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Tweet } from './tweet';

export class MockDatabaseService implements InMemoryDbService {
    
    createDb() {
        let friends = [
            "Brenda",
            "Sally",
            "Maxwell",
            "Darnell",
            "Conner"
        ];

        let tweets = [
            new Tweet(1,`I like to code as if no one else will have to edit  
                my code.  It's always to valueable and not open source.`,
                'John', new Date(), ['Jake'],  []),

            new Tweet(2,`Always code as if the guy who ends up maintaining your  
                code will be a violent psychopath who knows where you live.`,
                'Maxwell', new Date(), ['Jake'],  []),

            new Tweet(3,`Measuring programming progress by lines of code is  
                like measuring aircraft building progress by weight`,
                'Sally', new Date(),  [],  ['Sally'] ),

            new Tweet(4,`Debugging is twice as hard as writing the code in the 
                first place. Therefore, if you write the code as cleverly 
                as possible, you are, by definition, not smart enough to debug it.`,
                'Scott',  new Date(),  ['Glen'],  ['Mary']),

            new Tweet(5,`People think that computer science is the art of geniuses but the 
                actual reality is the opposite, just many people doing things that build 
                on each other, like a wall of mini stones`,
                'Darnell',  new Date(),  ['Joe', 'Mary'],  [] ),

            new Tweet(6,`You can’t have great software without a great team, and most 
                software teams behave like dysfunctional families.`,
                'Brenda',  new Date(),  [],  ['Mary', 'Glen'] ),
        ];

        return { 'tweets' : tweets, 'friends' : friends };

    }
}
