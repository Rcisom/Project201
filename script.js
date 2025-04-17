document.addEventListener("DOMContentLoaded", function () {
  const covenants = {
      noahic: {
          name: "Covenant of Noah",
          parties: "God and Noah (and his family)",
          promise: "Never again destroy the earth by flood",
          sign: "Rainbow",
          condition: "Unconditional",
          verses: "Genesis 6:18, 9:8–17",
          passage: "Genesis 6:18 - But with thee will I establish my covenant; and thou shalt come into the ark, thou, and thy sons, and thy wife, and thy sons' wives with thee."
      },
      abrahamic: {
          name: "Abrahamic Covenant",
          parties: "God and Abraham (and us)",
          promise: "Numerous descendants, land, and blessings to all nations through his lineage",
          sign: "Circumcision",
          condition: "Unconditional",
          verses: "Genesis 12:1–3; 15:1–21; 17:1–14",
          passage: "Genesis 12:2–3 – Now the Lord had said unto Abram, Get thee out of thy country, and from thy kindred, and from thy father's house, unto a land that I will shew thee:And I will make of thee a great nation, and I will bless thee, and make thy name great; and thou shalt be a blessing: And I will bless them that bless thee, and curse him that curseth thee: and in thee shall all families of the earth be blessed."
      },
      mosaic: {
          name: "Mosaic Covenant",
          parties: "God and Israelites",
          promise: "Israel will be God's treasured possession, a kingdom of priests, and a holy nation",
          sign: "The Sabbath",
          condition: "Obedience to Law of Moses",
          RENEWAL: "Sacrificial Offerings",
          verses: "Exodus 19:5–6; 24:3–8; Deuteronomy 5:1–22;",
          passage: 'Exodus 19:5-6 - Now if you obey me fully and keep my covenant, then out of all nations you will be my treasured possession. Although the whole earth is mine, you will be for me a kingdom of priests and a holy nation. These are the words you are to speak to the Israelites.\n'
      },
      davidic: {
          name: "Davidic Covenant",
          parties: "God and David",
          promise: "David’s lineage will endure forever, and his throne will be established eternally",
          condition: "Unconditional",
          verses: "2 Samuel 7:12–16; Psalm 89:3–4",
          passage: 'Pslam 89:3-4 - I have made a covenant with my chosen, I have sworn unto David my servant, Thy seed will I establish for ever, and build up thy throne to all generations. Selah.'
      },
      new: {
          name: "New Covenant",
          parties: "God and the house of Israel and Judah",
          promise: "God's law written on hearts, intimate knowledge of God, and forgiveness of sins",
          condition: "Unconditional",
          verses: "Jeremiah 31:31–34; Ezekiel 36:26–28",
          passage: 'Jeremiah 31:33-34 - But this shall be the covenant that I will make with the house of Israel; After those days, saith the Lord, I will put my law in their inward parts, and write it in their hearts; and will be their God, and they shall be my people. And they shall teach no more every man his neighbour, and every man his brother, saying, Know the Lord: for they shall all know me, from the least of them unto the greatest of them, saith the Lord: for I will forgive their iniquity, and I will remember their sin no more.'
      },
      baptism: {
          name: "Baptismal Covenant",
          parties: "You and God",
          promise: "Constant companionship of the Holy Ghost",
          condition: "Take upon oneself the name of Jesus Christ, always remember Him, and keep His commandments",
          verses: "Mosiah 18:8–10; D&C 20:37, 77;", 
          RENEWAL: "Sacrament",
          passage: 'Doctrine and Covenants 20:77 - O God, the Eternal Father, we ask thee in the name of thy Son, Jesus Christ, to bless and sanctify this bread to the souls of all those who partake of it, that they may eat in remembrance of the body of thy Son, and witness unto thee, O God, the Eternal Father, that they are willing to take upon them the name of thy Son, and always remember him, and keep his commandments which he has given them; that they may always have his Spirit to be with them. Amen.'
      },
      priesthood: {
          name: "Priesthood Covenant",
          parties: "God and You (Males)",
          promise: "Sanctification by the Spirit, become elect of God",
          condition: "Faithfully receive and magnify the priesthood",
          verses: "D&C 84:33–44",
          passage: "Doctrine and Covenants 84:33-37 - For whoso is faithful unto the obtaining these two priesthoods of which I have spoken, and the magnifying their calling, are sanctified by the Spirit unto the renewing of their bodies. They become the sons of Moses and of Aaron and the seed of Abraham, and the church and kingdom, and the elect of God. And also all they who receive this priesthood receive me, saith the Lord; For he that receiveth my Father receiveth my Father’s kingdom; therefore all that my Father hath shall be given unto him. And this is according to the oath and covenant which belongeth to the priesthood."
      },
      endowment: {
          name: "Temple Endowment Covenants",
          parties: "God and You",
          promise: "Increased Spiritual Power, Revelation, Strength, Eternal Life, and joint-heirship with Christ",
          condition: "Law of Obedience, Sacrifice, the Gospel, Chastity, and Consecration",
          verses: "General Handbook 27.2",
          passage: "General Handbook 27.2 - In the endowment, members covenant to live the law of obedience, sacrifice, the gospel, chastity, and consecration. These covenants help them draw closer to the Savior... and prepare to enter God’s presence."
      },
      sealing: {
          name: "Sealing Covenant",
          parties: "Husband and Wife (and God ultimately)",
          promise: "Exaltation and Eternal Life, ability to become like God and receive all He has",
          condition: "Honor marriage and family commitments, endure in righteousness",
          verses: "D&C 132:19–20",
          passage: 'Doctrine and Covenants 132:19-20 - And if a man marry a wife by my word, which is my law, and by the new and everlasting covenant, and it is sealed unto them by the Holy Spirit of promise, by him who is anointed, unto whom I have appointed this power and the keys of this priesthood, and it shall be said unto them—Ye shall come forth in the first resurrection; and if it be after the first resurrection, in the next resurrection; and they shall inherit thrones, kingdoms, principalities, and powers, dominions, all heights and depths—then shall it be written in the Lamb’s book of life, that they are the elect of God. And they shall pass by the angels, and the gods, which are set there, to their exaltation and glory in all things, as hath been sealed upon their heads, which glory shall be a fulness and a continuation of the seeds forever and ever.'
      }
  };

  // Show covenant details when a button is clicked
  window.showCovenant = function(key) {
      const content = document.getElementById("covenant-content");
      const c = covenants[key];

      content.innerHTML = `
          <h3>${c.name}</h3>
          <p><strong>Parties:</strong> ${c.parties}</p>
          <p><strong>Promise:</strong> ${c.promise}</p>
          ${c.sign ? `<p><strong>Sign:</strong> ${c.sign}</p>` : ''}
          <p><strong>Condition:</strong> ${c.condition}</p>
          <p><strong>Key Verses:</strong> ${c.verses}</p>
          ${c.RENEWAL ? `<p><strong>Sign:</strong> ${c.RENEWAL}</p>` : ''}
          ${c.passage ? `<p><strong>Passage:</strong> ${c.passage}</p>` : ''}
      `;
  };

  // Custom covenant form submission
  document.getElementById("covenant-form").addEventListener("submit", function (e) {
      e.preventDefault();  // Prevent the default form submission action

      // Get the values entered by the user
      const name = document.getElementById("covenantName").value;
      const parties = document.getElementById("parties").value;
      const promise = document.getElementById("promise").value;
      const condition = document.getElementById("conditions").value;
      const sign = document.getElementById("sign").value;
      const renewal = document.getElementById("renewal").value;

      // Check if values are valid (they should be, as we have the 'required' attribute in the form)
      if (!name || !parties || !promise || !condition) {
          alert("Please fill in all required fields.");
          return;
      }

      // Output section where we will display the newly created covenant
      const output = document.getElementById("custom-output");

      // Display the custom covenant details
      output.innerHTML = `
          <h3>${name}</h3>
          <p><strong>Parties:</strong> ${parties}</p>
          <p><strong>Promise:</strong> ${promise}</p>
          <p><strong>Condition:</strong> ${condition}</p>
          ${sign ? `<p><strong>Sign:</strong> ${sign}</p>` : ''}
          ${renewal ? `<p><strong>Renewal:</strong> ${renewal}</p>` : ''}
      `;

      // Reset the form after submission
      this.reset();
  });
});

document.addEventListener("DOMContentLoaded", function() {
    const kings = document.querySelectorAll('.king');

    kings.forEach(function(king) {
        king.addEventListener('click', function() {
            const name = king.getAttribute('data-name');
            const reign = king.getAttribute('data-reign');
            const details = document.createElement('div');
            details.classList.add('king-details');
            details.innerHTML = `<strong>${name}</strong><br>Reign: ${reign}`;
            
            if (!king.querySelector('.king-details')) {
                king.appendChild(details);
            } else {
                king.removeChild(king.querySelector('.king-details'));
            }
        });
    });
});