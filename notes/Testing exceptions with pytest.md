---
title: Testing exceptions with pytest
pubDate: 2024-11-21
lastUpdated: 2024-11-21
id: 20241121161135-testing-exceptions-with-pytest
---

Every time I end up wanting to test that an expected exception is thrown with [Pytest](https://docs.pytest.org/en/latest/assert.html#assertions-about-expected-exceptions), I end up looking up the syntax, so here it is:

```python
import pytest

def test_my_exception_is_raised():
    with pytest.raises(MyException):
        my_function()
```

This test will fail if calling `my_function()` _doesn't_ raise an exception of the type `MyException`.

But what if I want to check the exception has the expected message too?

```python
def test_my_exception_is_raised_with_message():
    with pytest.raises(MyException) as e:
        my_function()
    assert "my message" in str(e.value)
```

In this case, `e` is of type [`ExceptionInfo`](https://docs.pytest.org/en/stable/reference.html#exceptioninfo), not actually `Exception`, so you need to use `e.value` to get at the message. You can also assert things about the traceback of the exception via `e.traceback`, but I've not had a usecase for that recently.

While I was looking this stuff up again, I found out that you can actually clean this up a bit in some situations, by doing a regex match on the string representation of the exception thrown, like this:

```python
def test_my_exception_is_raised():
    with pytest.raises(MyException, match=r"^My message.*"):
        my_function()
```

This uses [`re.search`](https://docs.python.org/3/library/re.html#re.Pattern.search) to do the matching, and see the [Python docs](https://docs.python.org/3/library/re.html#regular-expression-syntax) for a quick regex reference.

I think I'd use this regex method if I wanted to assert something like the presence of a particular error code somewhere in my error message, but the more verbose version when I'm asserting something about the message that depends on the context of my test, such as is the ID of the thing I just tried to put into my database in the error message.

```python
def test_this_raises_error_code_1234():
    with pytest.raises(MyException, match=r"1234"):
        myfunction()

def test_this_raises_error_including_item_id_and_data():
    my_test_id, my_test_data = "XXXX", {"some": "data"}
    my_test_object = MyThing(id=my_test_id, data=my_test_data)

    with pytest.raises(MyException) as e:
        my_function(my_test_object)

    assert f"Couldn't process MyThing {my_test_id} with data {my_test_data}!" in str(e.value)
```
