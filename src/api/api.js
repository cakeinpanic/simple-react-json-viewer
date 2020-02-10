// Mock Json Example
export const MOCK_JSON = {
    "glossary": {
        "title": "example glossary",
		"GlossDiv": {
            "title": "S",
			"GlossList": {
                "GlossEntry": {
                    "ID": "SGML",
					"SortAs": "SGML",
					"GlossTerm": "Standard Generalized Markup Language",
					"Acronym": "SGML",
					"Abbrev": "ISO 8879:1986",
					"GlossDef": {
                        "para": "A meta-markup language, used to create markup languages such as DocBook.",
						"GlossSeeAlso": ["GML", "XML"]
                    },
					"GlossSee": "markup"
                }
            }
        }
    }
};

function timeout() {
    return new Promise((resolve, reject) => {
        const wait = setTimeout(() => {
            reject();
            clearTimeout(wait)
        }, 2000);
    })
}

// fetching results from a url using fetch from js
async function fetchResult(url){
    try {
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
    console.error(error);
    }
}
    
// Remvoving the dependency of axios
export async function request(url) {
    const response = await Promise.race([fetchResult(url), timeout()]);
    return response;
}
