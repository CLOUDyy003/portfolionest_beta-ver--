function getBotResponse(input) {
    if (input == 1) {
        return "Login to your profile";
    } else if (input == 2) {
        return "<--Test link-->";
    }else if (input == 3) {
        return "Sorry for the inconviniance .... but, You can mail us your query on <br> mail.example.xyz";
    }else if (input == 4) {
        return "You can send your valuable sugesstions here <br> PortfolioNest@mail.com";
    }else if (input == 5) {
        return "linkden(Ayush jagdhane)<br>linkden(Anjali Ranglani)<br>linkden(Bhavesh Shukare)<br>linkden(Prachi)<br>linkden(Rohan nishad)<br>linkden(Suraj Hemnani)";
    }else if (input == "I love PortfolioNest!") {
        return "Thank you!! <br> But try asking something about this site";
    }else {
        return "Try asking something else";
    }
}