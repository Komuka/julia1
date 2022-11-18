function CalculatingPrice () {
  type = document.getElementById('calculating__type').value;
  switch (type) {
    case "1":
      price = 250000;
      break;
    case "2":
      price = 120000;
      break;
    case "3":
      price = 70000;
      break
  }

  type = document.getElementById('calculating__size').value;
  switch (type) {
    case "1":
      price=price+50000;
      break;
  }

  document.getElementById('calculating__price').innerHTML = "От "+ price + " руб";
}

function ShowCalculating () {
if (document.getElementById('calculating__type').value == 0)

{
  alert ('выберите!!')
}    

else if  (document.getElementById('calculating__size').value == 0) 

{
  alert ('выберите!!')
}  

else  
{ document.getElementById('calculating__a').style.top='365px';}

  }

function SortingAll() {
    document.getElementById('stereo').style.display='flex';
    document.getElementById('ermitag').style.display='flex'; 
    document.getElementById('sun').style.display='flex';
    document.getElementById('yellow').style.display='flex';
    document.getElementById('strizhi').style.display='flex';
    document.getElementById('flats').style.display='flex';

    {
      all.style.backgroundColor = 'black';
      all.style.color = 'white';
      key.style.backgroundColor = 'white';
      key.style.color = 'black';
      dev.style.backgroundColor = 'white';
      dev.style.color = 'black';
      des.style.backgroundColor = 'white';
      des.style.color = 'black';
    }

    {
      flats.style.width ='38%';
      yellow.style.width = '38%';
    }
  };

function SortingKey() {
    document.getElementById('stereo').style.display='none';
    document.getElementById('ermitag').style.display='none';
    document.getElementById('sun').style.display='none';
    document.getElementById('yellow').style.display='none';
    document.getElementById('strizhi').style.display='flex';
    document.getElementById('flats').style.display='flex';

  {
    key.style.backgroundColor = 'black';
    key.style.color = 'white';
    all.style.backgroundColor = 'white';
    all.style.color = 'black';
    dev.style.backgroundColor = 'white';
    dev.style.color = 'black';
    des.style.backgroundColor = 'white';
    des.style.color = 'black';
    
  }
  {
    flats.style.width ='78%';
  }

};

function SortingDev() {
  document.getElementById('stereo').style.display='none';
  document.getElementById('ermitag').style.display='none';
  document.getElementById('sun').style.display='none';
  document.getElementById('flats').style.display='none';
  document.getElementById('strizhi').style.display='none';
  document.getElementById('yellow').style.display='flex';

  {
    dev.style.backgroundColor = 'black';
    dev.style.color = 'white';
    all.style.backgroundColor = 'white';
    all.style.color = 'black';
    key.style.backgroundColor = 'white';
    key.style.color = 'black';
    des.style.backgroundColor = 'white';
    des.style.color = 'black';
    
  }

  {
    yellow.style.width = '78%';
  }
};

function SortingDes() {
  document.getElementById('stereo').style.display='flex';
  document.getElementById('ermitag').style.display='flex';
  document.getElementById('sun').style.display='flex';
  document.getElementById('flats').style.display='none';
  document.getElementById('strizhi').style.display='none';
  document.getElementById('yellow').style.display='none';

  {
    des.style.backgroundColor = 'black';
    des.style.color = 'white';
    all.style.backgroundColor = 'white';
    all.style.color = 'black';
    key.style.backgroundColor = 'white';
    key.style.color = 'black';
    dev.style.backgroundColor = 'white';
    dev.style.color = 'black';
    
  }
};


document.querySelectorAll('.qa__accordion').forEach((el) => {
  el.addEventListener('click', () => { 

      let qa__content = el.nextElementSibling;

      if (qa__content.style.maxHeight) {
        document.querySelectorAll('.qa__content').forEach((el) => el.style.maxHeight = null)
      } else {
        document.querySelectorAll('.qa__content').forEach((el) => el.style.maxHeight = null)
        qa__content.style.maxHeight = qa__content.scrollHeight + 'px';
      }
      
  })
})