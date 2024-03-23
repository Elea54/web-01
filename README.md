## Questions 

1.  **`npm install` command also generated a package-lock.json file
    along with package.json. What is the purpose of this file?**

Ce fichier permet de bloquer toutes les versions des dépendances et des modules, pour
que toute l'équipe de développement aie les mêmes versions, évitant ainsi d'éventuels concflits.

2. **By convention, all NPM dependencies use a 3-digit format for
   version numbers. How do you call this?**

C'est la numérotation sémantique (versioning en anglais).

3. **What is a devDependency exactly? What are the differences with a
   dependency?**

Les devDependencies sont toutes les dépendances utilisées lors du développement du projet, par exemple elles sont
utilisées pour les tests. Les dependency sont quant à elles utilisées quand l'application est lancée, pendant la phase de "run".

4. **What is a closure/iife ? What was it used for ? What replaced it?**

C'est une fonction immédiatement invoquée. Elles servent à rendre globale externe la portée de ses variables internes.
En ES6, elles ont été remplacée par l'export des fonctions.

5. **What is the difference between import * from './utils' and import
   { parseUrl } from './utils'? What can be the consequences of
   using one instead of the other?**

Le premier import va importer la bibliothèque entière de ./utils, alors que le second va uniquement
importer parseUrl. Importer le premier va prendre beaucoup de place et ralentir l'algorithme, alors qu'en utilisant 
le second on pourra uniquement utiliser parseUrl.

6. **Can you think of at least 2 things that are possible with Java
   classes, but cannot be done with ES6 classes?**

On ne peut pas utiliser les interfaces et l'overloading.

7. **What are the differences between var and let?**

Var aura une portée atteingnant le scope global, sauf dans les fonctions où elle la portée sera dans le 
cope de la fonction (entre {}). Quant à let, sa portée sera uniquement dans le scope (entre {}) dans tous les cas.

8. **What is the .bind(this) stuff? What happens if you delete it? Is
   it needed when using an arrow function ? why ?**

Lors d'un delay, avant d'utiliser les arrow functions, this prenait l'instance de l'objet de la fonction qu'il avait appelé. 
Pour lier this avec la classe et non la fonction uniquement, en utlisait le .bind(this). Il n'est plus indispensable dans les
arrow function, puisque ses dernières remplacent les fonctions asynchrones.

9. **What does the @ symbol mean in @babel/?**

Le @ fait référence à un package utilisé pour npm.

10. **What are the advantages of Promises?**

Les Promises évitent les callbackhell lors d'un call http, que l'on pouvait trouver dans ES5. Elles permettent d'utiliser
manière asynchrone des exécusions à la suite les unes des autres, grâce au mot clef "then". Elles possèdent 2 stat de retour :
sucess et error.

11. **What version of ECMAScript async / await was released in ?**

Avec la version ES8.

12. **Component-oriented programming for the web is considered more
    maintainable. Why?**

Les composant permettent de mieux fragmenter des pages. Si l'on veut apporter des modifications dans un composant,
cela n'affectera pas les autres composant. De plus, un composant peut-être utilisé de multiple fois avec des valeurs différentes.

13. **What is Functional programming?**

C'est un paradigme permettant de construire les programmes en apppliquant des fonctions.

14. **Explain what the map() function does ?**

Map va modifier un par un les éléments d'une liste, en y appliquant une fonction par exemple.

15. **Explain what the filter() function does ?**

Filter filtre les éléments d'une liste en fonction d'une condition, et va retourner une nouvelle liste
composée uniquement des éléments valables.

16. **Explain what the reduce() function does ?**

Reduce réduit toute la liste en une seule valeur en appliquant une fonction.

17. **What is the difference between .then() and async/await when
    handling asynchronous functions?**

Then permet une exécution chainée des Promises, async/await permet d'attendre que la valeur soit retournée avant 
d'effectuer une Promise.

18. **What does the _ prefix mean on a sass file?**

Permet d'indiquer que ce fichier sera uniquement importé, pas compilé.





## Questions tout au long du TP :

### SPA :

**How many megabytes are transferred in total after going through the 3 views, with size=2?**

(réponse effectuée après avoir fini le TP) 1.1kB

**How many files have been transferred?**

Au total, 10 fichiers ont été transmis.

### WebPack :

**The source code for welcome.js, game.js and score.js has not been bundled at all. Why?**

Les autres fichiers n'ont pas été bundled parce qu'ils ont tous été rassemblé dans le fichier main.js du bundle.

### CSS loader :

**Build the code with npm run build and look at the code generated in dist/main.js.
What is this file size?**

(réponse effectuée après avoir fini le TP) Tous les codes css ont été assemblés dans ce fichier.


### HTML loader :

**How many files have been transferred after going through the three views, with size=2?**

10 fichiers on été tranférés.


