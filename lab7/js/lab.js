/**
 * Author:   Laiy Joshi, Shao Chen
 * Created:   04.27.2022
 * License: public Domain
 **/

}

function main() {
    var userName = window.prompt("Hi. Please tell me your name so I can fix it.");
    document.writeln("<style>:root {--textlen: " + userName.length + ";}</style>");
    var sortedName = sortUserName(userName);
    document.writeln("Here's your sorted name: " + sortedName + "</br></br>");
    var randomName = randomizeName(userName);
    document.writeln("And oh hey, I fixed your name.<br>Your new one is above.");
    document.writeln("<div class='name'>" + randomName + "</div>")
}

//output//
document.writeln ("look! your word is now sorted:",
SortchosenWord(), "</br>");

}
