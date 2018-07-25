$(document).ready(function () {
    $("#slide").click(function () {
        $("#panel").slideToggle(1000);

var originalSysText = "The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog."

function checkAccuracy(userInput, sysCompare) {
    if (userInput === sysCompare) {
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

function wordFinished(userInput, sysText, originalSysText) {
    var space = " "
    var userSpace = ((userInput.split('')).splice(-1))[0]
    var sysChars = originalSysText.split('');
    var sysSpace = (sysChars.splice(0, userInput.length)).splice(-1)[0]
    if (sysSpace === space && space === userSpace) {
        var sysWords = sysText.split(' ');
        var firstWord = sysWords[0]
        var otherWords = (sysWords.splice(1)).join(' ')
        $('#currentWord').text(firstWord)
        $('#otherWords').text(otherWords)
    }
}

$('.userInput').on('keyup', function (e) {
    var userInput = $('.userInput').val();
    var sysText = ((originalSysText.split('')).splice(userInput.length)).join('')
    var orginalChars = originalSysText.split('')
    var sysCompare = (orginalChars.splice(0, userInput.length)).join('');
    checkAccuracy(userInput, sysCompare);
    wordFinished(userInput, sysText, originalSysText);
});
   });
});
