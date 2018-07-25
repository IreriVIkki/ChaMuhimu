var originalSysText = "The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog."

function checkAccuracy(userInput, sysCompare){
    if (userInput === sysCompare){
        $('#currentWord').addClass('text-success');
        $('#currentWord').removeClass('text-danger');
        $('.userInput').addClass('text-info');
        $('.userInput').removeClass('text-danger');
    } else {
        $('#currentWord').removeClass('text-success');
        $('#currentWord').addClass('text-danger');
        $('.userInput').addClass('text-danger');
        $('.userInput').removeClass('text-info');
    }
}

function wordFinished(userInput, sysText) {
    var space = " "
    var userSpace = ((userInput.split('')).splice(-1))[0]
    var sysChars = sysText.split('');
    var sysSpace = (sysChars.splice(0, userInput.length)).splice(-1)[0]
    if (sysSpace === space && space === userSpace) {
        // console.log('works')
        var sysWords = sysText.split(' ');
        var sysWords2 = sysWords.splice(2)
        var sysText = sysWords.join(' ')
        var firstWord = sysWords2.splice(0,1) + [' ']
        var otherWords = (sysWords2.splice(0)).join(' ')
        console.log(firstWord)
        console.log(otherWords)
        $('#currentWord').text(firstWord)
        $('#otherWords').text(otherWords)
    }
}

$('.userInput').on('keyup', function (e) {
    var sysText = $('.sysText').text();
    // console.log(sysText)
    var userInput = $('.userInput').val();
    var sysChars = sysText.split('');
    var orginalChars = originalSysText.split('')
    var sysCompare = (orginalChars.splice(0, userInput.length)).join('');
    checkAccuracy(userInput, sysCompare);
    wordFinished(userInput, sysText);
});

